import React, { useRef, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import jQuery from 'jquery';
import 'bootstrap-slider/dist/css/bootstrap-slider.min.css';
import 'bootstrap-slider';

const BootstrapSlider = (props) => {
  const ref = useRef(null);
  useLayoutEffect(() => {
    const slider = jQuery(ref.current).slider({
      min: props.min,
      max: props.max,
      value: props.value,
      step: props.step,
    });
    slider.on('slide', (v) => {
      props.onSlide(v.value);
    });
  }, []);
  return (
    <>
      <input ref={ref} type="text" />
      <style jsx>{`
        :global(.slider.slider-horizontal) {
          width: 100%;
        }
        :global(.slider-handle) {
          background-image: none;
          border: 3px solid #1ab394;
          background-color: #ffffff;
        }
        :global(.slider-selection) {
          background-color: #1ab394;
          background-image: none;
        }
      `}</style>
    </>
  );
};

BootstrapSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  value: PropTypes.arrayOf(PropTypes.number).isRequired,
  onSlide: PropTypes.func.isRequired,
};

export default BootstrapSlider;
