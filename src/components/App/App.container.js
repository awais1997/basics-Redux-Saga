import App from "./App";
import { connect } from "react-redux";
import { getNameRequest } from "../../actions";

const mapStateToProps = (state) => {
  return {
    name: state.name,
    isLoading: state.isLoading,
  };
};

const mapDispatchToProps = {
  getNameRequest,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
