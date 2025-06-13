pipeline{
    agent any
    
    stages {
        stage('Pre build'){
            steps{
                echo 'Preparing environment...'
                sh "ls -la"
                sh "docker --version"
                sh "cp /home/anirudh/.creds/.envdbname .env"
            }
        }
        stage('Build') {
            steps {
                echo 'Building...'
                sh "docker build -t my-app ."
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                // Add your test commands here
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying...'
                // Add your deployment commands here
            }
        }
    }

    post {
        always {
            echo 'This will always run after the pipeline completes.'
        }
        success {
            echo 'This will run only if the pipeline succeeds.'
        }
        failure {
            echo 'This will run only if the pipeline fails.'
        }
    }
}