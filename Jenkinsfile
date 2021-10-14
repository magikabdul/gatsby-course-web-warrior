pipeline {
    agent any

    stages {
        stage {
            stage('GIT - update') {
                        steps {
                            git branch: 'develop', credentialsId: 'github-magikabdul', url: 'git@github.com:magikabdul/gatsby-course-web-warrior.git'
                        }
                    }
            stage('NPM - Install') {
                steps {
                    sh 'npm install'
                }
            }

            stage('NPM - Build') {
                steps {
                    sh 'npm run build'
                }
            }

            stage('SCP - Deploy') {
                steps {
                    sh 'scp -P 5000 -i /home/kris/.ssh/wordic /var/lib/jenkins/workspace/reminder-react/storybook-static/*.* kris@evoko.cholewa.cloud:/home/kris/reminder'
                }
            }

            stage('SSH - Control') {
                steps {
                    sh 'ssh -p 5000 -i /home/kris/.ssh/wordic kris@evoko.cholewa.cloud "sudo cp /home/kris/reminder/*.* /var/www/html"'
                }
            }
        }
    }

    post {
        always {
            discordSend description: "**Build** #${currentBuild.number}\n**Changes:** ${currentBuild.changeSets}",

                footer: "Result - ${currentBuild.currentResult}",
                result: currentBuild.currentResult,

                title: 'Gatsby Course - Web Warrior',
                webhookURL: 'https://discord.com/api/webhooks/898256243934769172/KTE8ox2f67OcPKm_9yEApZ4d_M0gHzIDlgGppJbLF2Vbfzf-e_XutioGe_3yHZgn7Ggm'
        }
    }
}
