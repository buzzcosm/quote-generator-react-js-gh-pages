import { RotatingLines } from "react-loader-spinner";
import PropTypes from 'prop-types';

export function Loader(props) {
  return (
    <RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={props.visible}
    />
  )
}

Loader.propTypes = {
  visible: PropTypes.bool.isRequired,
};