FROM squidfunk/mkdocs-material as  build
COPY . .
WORKDIR /docs
RUN mkdocs build

FROM nginx
COPY --from=build /docs/site/ /usr/share/nginx/html/
EXPOSE 80
