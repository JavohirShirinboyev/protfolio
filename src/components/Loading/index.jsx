import { Grid } from "react-loader-spinner";
import { Container } from "./styled";

const Loading = () => {
  return (
    <Container>
      <Grid
        height="80"
        width="80"
        color="#C778DD"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </Container>
  );
};

export default Loading;
