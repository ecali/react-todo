import { Box } from "@mui/material";
import { Widget } from "../components/Widget";
import { useWindowResize } from "../hooks/useWindowsSize";
import { Main } from "./Main";

export const Home = () => {
  const width = useWindowResize();
  const brackPoint = 1120;
  return (
    <div>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        <Box gridColumn={width > brackPoint ? "span 8" : "span 12"}>
            <Main />
        </Box>
        { width > brackPoint &&  <Box gridColumn="span 4">
          <Widget />
        </Box>}
      </Box>
    </div>
  );
};
