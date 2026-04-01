pipeline {
    agent any

    tools {
        nodejs 'NodeJS-20'
    }

    environment {
        HEADLESS = 'true'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install --with-deps'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npx cucumber-js'
            }
        }
    }
}

post {
    always {
        junit testResults: 'reports/junit.xml', allowEmptyResults:true
        archiveArtifacts artifacts: 'reports/**',allowEmptyArchive:true
    }
}