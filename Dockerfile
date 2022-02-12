FROM node:14 AS builder
ARG WORK_DIR=/var/www/node
WORKDIR ${WORK_DIR}
COPY . .
# install for alpine linux
RUN npm ci --arch=x64 --platform=linuxmusl
RUN npm run build
# prune non-production node packages
RUN npm prune --production
# use node-prune to remove unused files (doc,*.md,images) from node_modules
RUN wget https://gobinaries.com/tj/node-prune && sh node-prune && node-prune

FROM node:14-alpine AS release
ARG WORK_DIR=/var/www/node
WORKDIR ${WORK_DIR}

ENV NODE_ENV production

COPY --from=builder ${WORK_DIR}/next.config.js ./.
COPY --from=builder ${WORK_DIR}/public ./public
COPY --from=builder ${WORK_DIR}/.next ./.next
COPY --from=builder ${WORK_DIR}/node_modules ./node_modules
COPY --from=builder ${WORK_DIR}/package.json ./package.json

EXPOSE 3000

ENTRYPOINT ["npm", "start"]
