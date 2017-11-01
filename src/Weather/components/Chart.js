import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
    if (!data) {
        return 0;
    }

    return _.round(_.sum(data) / data.length);
}

export default function Chart({ data, color, units }) {
  return (
      <div>
          <Sparklines data={data} height={100} width={150}>
              <SparklinesLine color={color} />
              <SparklinesReferenceLine type="avg" />
          </Sparklines>
          <div>{average(data)} {units}</div>
      </div>
  )
};

Chart.propsTypes = {
    data: PropTypes.array.isRequired,
    color: PropTypes.string,
    units: PropTypes.string
};

Chart.defaultProps = {
    color: 'black'
};
