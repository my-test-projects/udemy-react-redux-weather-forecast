import React from 'react';
import PropTypes from 'prop-types';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default function Chart({ data, color }) {
  return (
      <Sparklines data={data} height={100} width={150}>
          <SparklinesLine color={color} />
          <SparklinesReferenceLine type="avg" />
      </Sparklines>
  )
};

Chart.propsTypes = {
    data: PropTypes.array.isRequired,
    color: PropTypes.string
};

Chart.defaultProps = {
    color: 'black'
};
