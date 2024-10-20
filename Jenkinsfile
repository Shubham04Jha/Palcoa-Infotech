pipeline {
    environment {
        imagename = "palcoa" // Name of the Docker image
    }

    agent any
    stages {
        stage('Git Checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/main']], 
                userRemoteConfigs: [[credentialsId: 'github-cred', url: 'https://github.com/Shubham04Jha/Palcoa-Infotech.git']]])
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build --tag $imagename .'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh 'docker run -p 3000:3000 --name $imagename -d $imagename'
            }
        }
    }
}
