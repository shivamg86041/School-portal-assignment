
# School Form Submission Application

This is a React application where users can submit their details (like name, email, mobile number, course, and total marks). The submitted data is saved to `localStorage`, and users can download a PDF with the form's content.

Additionally, a chart overview is displayed, showing the students' marks. The chart data updates based on form submissions and can be viewed in a responsive manner on various devices.

## Features

- **Form Submission**: Submit student details via a well-designed form.
- **PDF Generation**: Upon form submission, a PDF is generated that contains the student's details in a well-organized format.
- **Marks Overview Chart**: A bar chart showing students' marks, which updates based on form submissions. The chart displays student names on the x-axis and marks on the y-axis. The email and marks are shown when hovering over the chart.
- **Responsive Design**: The app is fully responsive and adjusts seamlessly to different screen sizes, including mobile, tablet, laptop, and desktop views.
- **Local Storage**: Form data is stored in `localStorage` so it persists across sessions.

## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Libraries**:
  - `jsPDF`: For generating the PDF.
  - `recharts`: For displaying the marks overview chart.
  - `react-router-dom`: For managing the app's routing.

## Installation

Follow these steps to run the project locally:

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd <project-directory>
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

4. Open your browser and visit [http://localhost:3000](http://localhost:3000).

## App Structure

- **App.js**: The main component that renders the application layout, including the navbar and routing.
- **Form.js**: The form component where users input their details.
- **MarksOverview.js**: Displays the bar chart with the marks overview of all submitted students.
- **generatePDF.js**: Function responsible for generating the PDF based on form data.
- **localStorage.js**: Helper file for saving and retrieving data from `localStorage`.
- **Tailwind CSS**: The app uses Tailwind CSS for responsive and customizable styling.

## How It Works

1. **Form Submission**:
    - When the user fills out the form, their data is stored in `localStorage`.
    - After the form submission, the user is redirected to a "Thank You" page, and a PDF is generated with the form data.
    - The PDF is automatically downloaded.

2. **Marks Overview**:
    - The marks overview chart displays student names and marks.
    - The data updates dynamically when new form submissions are added.
    - Users can hover over the chart to view the email and marks for each student.

3. **LocalStorage Handling**:
    - Form data is saved in `localStorage` so that it persists across page reloads and sessions.
    - On app load, the data is fetched from `localStorage` to populate the chart.

## Future Improvements

- **User Authentication**: Add user authentication so that only registered users can submit forms.
- **Database Integration**: Integrate with a backend database to store form submissions.
- **Email Integration**: Allow users to receive email notifications after form submission.
- **Form Validation**: Improve form validation with more detailed checks and error messages.
