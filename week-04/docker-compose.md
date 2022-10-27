# Docker Compose and Volumes

## Docker Compose
- **Docker Compose** - an application that allows us to run multiple Docker containers as a single application
- This is how you would launch your capstone to a new Digital Ocean droplet (or other Docker infrastructure)
- generally, it is simpler than its competition
    - Docker Swarm
    - Amazon Elastic Container Service
    - Kubernetes
        - Kubernetes: large scale orchestration with multiple nodes (machines)
        - Docker-Compose: simple orchestration meant to run on one machine
- Docker containers can be networked with each other or with other non-docker servers
    - We can map ports on the parent server to map to individual docker containers
- Docker Volumes - how docker persists data so that containers can be spun up and spun down without losing data
    - https://docs.docker.com/storage/volumes/
- **YAML** - **Y**aml **A**int **M**arkup **L**anguage - the language that Docker compose configuration files are written in
    - `docker-compose.yml`
    - Not Docker specific. Also used elsewhere, like Drupal templating
    - Uses fixed indentation and colons
    - [Official Documentation](https://yaml.org/)
    - [Understanding Yaml at a Glance](https://docs.saltstack.com/en/latest/topics/yaml/)
    - [Cheat Sheet](https://kapeli.com/cheat_sheets/YAML.docset/Contents/Resources/Documents/index)

## Docker Compose Code Review
- Example repo: https://github.com/Deep-Dive-Coding-Fullstack-Licensing/docker-compose
- docker-compose.yml
    - contains the link between our backend, frontend, and sql containers
    - volume configuration links our containers ephemeral hard drive to actual hard drive location on our server
- docker-compose-lesson.env
    - Environment variables - Secret configuration we don't want to add to github
    - It is CRITICALLY important to make sure that this is ignored in your .gitignore file.
        - We don't have it this way in this repo because this is an example repo that has no real passwords
        - can find a real .gitignore example with the proper ignore rules in the example capstone
- sql/shopping-list.sql file
    - used to build the database
- sql/Dockerfile
    - automatically runs the shopping-list.sql file on build

## Commands to start and stop docker
- `docker-compose up` - spin up the docker containers indicated in the docker-compose.yml file
- `docker-compose down` - deletes all containers