import React from "react";
import PropTypes from "prop-types";

export const Number = props => {
	return <h1 className="digit">{props.numero}</h1>;
};

Number.propTypes = {
	numero: PropTypes.any
};
