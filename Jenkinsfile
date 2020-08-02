node {
    def commit_id
    stage('preparation') {
        checkout scm
        bat "git rev-parse --short HEAD > .git/commit-id"
        commit_id = readFile('.git/commit-id').trim()
    }

    stage('test') {
        nodejs(nodeJSInstallationName: 'Nodejs') {
            bat 'npm install'
            bat 'npm test'
        }
    }

    stage('docker bulid/push') {
        docker.withRegistry('https://index.docker.io/v1/', 'Docker') {
            def app = docker.build('nvkpavankumar/docker-nodejs:${commit_id}','.').push()
        }
    }
}