import * as React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function App() {
  const [token, setToken] = React.useState();

  if (!token) {
    return <SignIn setToken={setToken} />;
  }

  return <Dashboard />;
}
