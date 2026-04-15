
import PropTypes from 'prop-types';

const SectionHeading = ({ firstTitle, secondTitle }) => {
  return (
    <div className='flex flex-col items-center text-center'>
      <div className='mb-3 h-1 w-16 rounded-full bg-amber-500'></div>
      <h1 className='text-4xl font-extrabold tracking-tight md:text-5xl'>
        {firstTitle}
        <span className='text-amber-600'>{secondTitle}</span>
      </h1>
    </div>
  );
};

SectionHeading.propTypes = {
  firstTitle: PropTypes.string.isRequired,
  secondTitle: PropTypes.string.isRequired,
};

export default SectionHeading



