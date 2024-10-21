# Questionnaire Web Page

This project is a simple questionnaire web page built using React. The web page contains a 1-minute timer, renders a question with multiple-choice answers, and allows users to select and submit their answers. The interface provides feedback based on the correctness of the user's answer and allows them to proceed to the next question or retake the questionnaire.

![Screenshot 2024-10-22 001420](https://github.com/user-attachments/assets/863f0b80-596d-4619-8c4a-64a088c13022)
![Screenshot 2024-10-22 001409](https://github.com/user-attachments/assets/9fe7e9dc-83f4-4fce-8add-104cd52ad27a)

## Features

1. **Timer**:
   - A 1-minute countdown timer is displayed at the top of the page.
   - If the timer runs out, a pop-up message is shown, prompting the user to reload the page to retake the questionnaire.

2. **Multiple Choice Question**:
   - A question is rendered below the timer, followed by four clickable options.
   - Users can select an option, and the selected option will be highlighted.

3. **Submit Button**:
   - A "Submit" button is displayed at the bottom of the page.
   - On clicking "Submit":
     - If the selected answer is correct, the selected option’s background turns green.
     - If the selected answer is incorrect, the selected option’s background turns red, and the correct answer’s background turns green.
   - After submission, the "Submit" button changes to "Next".

4. **Pop-up on Time Up**:
   - When the time runs out, a pop-up message appears, asking if the user wants to reload the page to attempt the questionnaire again.

## How to Run the Project

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or above)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/questionnaire.git
   cd questionnaire
