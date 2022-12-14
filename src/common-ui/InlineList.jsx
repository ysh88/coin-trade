import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, css, withStylesPropTypes } from './withStyles';
import { unit } from './Theme';

function InlineList({
  align,
  children,
  styles,
  spacingBetween,
  verticalAlign,
}) {
  return (
    <div
      {...css(
        styles.wrapper,
        align === 'center' && styles.alignCenter,
        align === 'right' && styles.alignRight,
        verticalAlign === 'top' && styles.verticalAlignTop,
        verticalAlign === 'bottom' && styles.verticalAlignBottom
      )}
    >
      {/* React.Children.map = 자식 요소들을 순회(유틸리티 함수) */}
      {React.Children.map(children, child => (
        <div {...css({ marginRight: spacingBetween * unit })}>{child}</div>
      ))}
    </div>
  );
}

InlineList.propTypes = {
  ...withStylesPropTypes,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  verticalAlign: PropTypes.oneOf(['top', 'middle', 'bottom']),
  spacingBetween: PropTypes.number,
  children: PropTypes.node,
};

InlineList.defaultProps = {
  spacingBetween: 1,
};

export default withStyles(() => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  alignCenter: {
    justifyContent: 'center',
  },
  alignRight: {
    justifyContent: 'flex-end',
  },
  verticalAlignTop: {
    alignItems: 'flex-start',
  },
  verticalAlignBottom: {
    alignItems: 'flex-end',
  },
}))(InlineList);
