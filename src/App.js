import React, { Suspense, lazy } from "react";
import {Container,Row, Spinner} from "react-bootstrap"
// import LazyComponent from "./components/LazyComponent"
const LazyComponent = lazy(() => import("./components/LazyComponent"));

function App() {
  return (
    <Container>
      <Row className="justify-content-center">
      <h2>App component will call a LazyComponent via Suspense</h2>
      <pre>You might want to change to slow 3g to see the magic happens</pre>
      <Suspense
        fallback={
          <Spinner animation="border" role="status">
            
          </Spinner>
        }
      >
        <LazyComponent />
      </Suspense>
      </Row>
    </Container>
  );
}

export default App;
