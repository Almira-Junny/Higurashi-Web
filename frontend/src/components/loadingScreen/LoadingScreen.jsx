import { CircularProgress } from "@mui/material";
import "./loadingscreen.css";

function LoadingScreen() {
  return (
    <div className="loadingScreen">
      <CircularProgress />
    </div>
  );
}

export default LoadingScreen;
