import React, { useState } from "react";
import { Accordion, Button, Table } from "react-bootstrap";
import { PDFDownloadLink, Document, Page, Text } from "@react-pdf/renderer";

const MyDocument = ({ questions }) => (
  <Document>
    <Page>
      {questions.map((q) => (
        <React.Fragment key={q.id}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              margin: "30px 50px 0px",
            }}
          >
            {q.question}
          </Text>
          <Text style={{ fontSize: 16, margin: "10px 50px  10px" }}>
            {q.answer}
          </Text>
        </React.Fragment>
      ))}
    </Page>
  </Document>
);

const Blog = () => {
  const [questions, setQuestions] = useState([
    {
      id: 7,
      question: "React page to text",
      answer: "",
    },
    {
      id: 1,
      question: "How to validate React props using PropTypes?",

      answer:
        "The PropTypes library for React can be used to check the props supplied to a component, ensuring that the right type of data is being utilized and catching mistakes early in the development process. PropTypes can be used by importing it from the prop-types library and specifying the kinds of each prop. The isRequired method makes sure that the component receives all required props. During development mode, a warning is logged in the console if any props are missing or of a different type than what is expected. It's vital to keep in mind that PropTypes is only evaluated during development, thus data should still be validated on the server-side to avoid security concerns and guarantee the correct data is displayed to users.",
    },
    {
      id: 2,
      question: "What is a custom hook, and why will you create a custom hook?",
      answer:
        "A custom hook is a reusable function in the React framework that incorporates shared stateful behavior and logic. By abstracting away complex functionality, custom hooks help developers make their code easier to read and maintain. A React application can add customized hooks for a number of purposes. Because they let you abstract away complex functionality and use it across various components, custom hooks have the major advantage of being reused. By centralizing related logic and stateful behavior, custom hooks can aid in code organization and make it simple to test individual lines of code independently. Furthermore, performance can be improved with the help of custom hooks by memorizing values or lowering the frequency of re-rendering. In general, using custom hooks in a React application can help you create code that is easier to read, maintain, and utilize.",
    },
    {
      id: 3,
      question: "What is the virtual DOM?",
      answer:
        "The virtual DOM is a lightweight representation of the actual DOM. React uses it to optimize updates and minimize the number of DOM manipulations.",
    },
  ]);

  return (
    <div>
      <h1 className="text-center my-5">Welcome to the Blog Page!</h1>
      <div className="text-center my-5">
        <PDFDownloadLink
          document={<MyDocument questions={questions} />}
          fileName="questions-and-answers.pdf"
        >
          {({ loading }) =>
            loading ? (
              "Loading document..."
            ) : (
              <Button variant="primary">Download PDF</Button>
            )
          }
        </PDFDownloadLink>
      </div>
      <div className="mb-5">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <span className="fw-bold text-danger pe-2">Question:</span> Tell
              us the differences between uncontrolled and controlled components.
            </Accordion.Header>
            <Accordion.Body>
              <Table striped bordered hover>
                <thead>
                  <tr className="text-center fw-bold">
                    <th>Uncontrolled Components</th>
                    <th>Controlled Components</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Forms do not have state </td>
                    <td>Forms have state</td>
                  </tr>
                  <tr>
                    <td>
                      Form elements directly get their values from the DOM
                    </td>
                    <td>Form elements are set with values from state</td>
                  </tr>
                  <tr>
                    <td>Less code to write</td>
                    <td>More code to write</td>
                  </tr>
                  <tr>
                    <td>Can be used in simple forms</td>
                    <td>
                      Useful for complex forms with complex validation logic
                    </td>
                  </tr>
                  <tr>
                    <td>Useful for quick prototyping</td>
                    <td>Ensures data consistency and improves debugging</td>
                  </tr>
                </tbody>
              </Table>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <span className="fw-bold text-danger pe-2">Question:</span> How to
              validate React props using PropTypes.
            </Accordion.Header>
            <Accordion.Body>
              The PropTypes library for React can be used to check the props
              supplied to a component, ensuring that the right type of data is
              being utilized and catching mistakes early in the development
              process. PropTypes can be used by importing it from the prop-types
              library and specifying the kinds of each prop. The isRequired
              method makes sure that the component receives all required props.
              During development mode, a warning is logged in the console if any
              props are missing or of a different type than what is expected.
              It's vital to keep in mind that PropTypes is only evaluated during
              development, thus data should still be validated on the
              server-side to avoid security concerns and guarantee the correct
              data is displayed to users.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <span className="fw-bold text-danger pe-2">Question:</span> Tell
              us the difference between nodejs and express js.
            </Accordion.Header>
            <Accordion.Body>
              <Table striped bordered hover>
                <thead>
                  <tr className="text-center fw-bold">
                    <th>Node.js</th>
                    <th>Express.js</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Node.js is a runtime environment for JavaScript.</td>
                    <td>
                      Express.js is a web application framework built on top of
                      Node.js.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Node.js provides a set of core modules for building
                      network applications.
                    </td>
                    <td>
                      Express.js provides a set of APIs for building web
                      applications and APIs.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Node.js can be used to build any type of server-side
                      application.
                    </td>
                    <td>
                      Express.js is specifically designed for building web
                      applications and APIs.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Node.js provides a low-level API for working with network
                      protocols.
                    </td>
                    <td>
                      Express.js provides a higher-level API for building web
                      applications.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Node.js does not provide any routing or middleware
                      functionality out of the box.
                    </td>
                    <td>
                      Express.js provides a robust set of routing and middleware
                      APIs that make it easy to build web applications.
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <span className="fw-bold text-danger pe-2">Question:</span> What
              is a custom hook, and why will you create a custom hook?
            </Accordion.Header>
            <Accordion.Body>
              A custom hook is a reusable function in the React framework that
              incorporates shared stateful behavior and logic. By abstracting
              away complex functionality, custom hooks help developers make
              their code easier to read and maintain.
              <br />A React application can add customized hooks for a number of
              purposes. Because they let you abstract away complex functionality
              and use it across various components, custom hooks have the major
              advantage of being reused. By centralizing related logic and
              stateful behavior, custom hooks can aid in code organization and
              make it simple to test individual lines of code independently.
              Furthermore, performance can be improved with the help of custom
              hooks by memorizing values or lowering the frequency of
              re-rendering. In general, using custom hooks in a React
              application can help you create code that is easier to read,
              maintain, and utilize.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default Blog;
