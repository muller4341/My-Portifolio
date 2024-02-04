
import PropTypes from 'prop-types';

const SectionHeading = ({ firstTitle, secondTitle }) => {
  return (
    <div>
      <h1 className='text-4xl font-bold'>
        {firstTitle}
        <span className='text-yellow-600'>{secondTitle}</span>
      </h1>
    </div>
  );
};

SectionHeading.propTypes = {
  firstTitle: PropTypes.string.isRequired,
  secondTitle: PropTypes.string.isRequired,
};

export default SectionHeading



