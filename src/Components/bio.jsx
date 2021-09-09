import selfie from '../assets/images/selfie.jpg';

export default function AboutMe() {
  return (
    <>
      <section className='intro'>
        <h1 className='section-title title-intro'>
          Hi, I'm <span>Tyler Petri</span>
        </h1>
        <p className='subtitle subtitle-intro' id='bio'>
          Web Development
        </p>
        <img src={selfie} alt='Profile' className='my-pic' />
      </section>

      <div className='bioBox'>
        <h3 className='bioTitle'>About me</h3>
        <p>
          A retired poker player, semi-retired cook who has found a keen
          interest in programming during COVID-19.
        </p>
        <p>
          I've graduated from a 12-week intensive Full Stack bootcamp a few
          months ago, ever since continuing my studies and exploration to
          further my knowledge. Eventually specializing in
          Javascript/React/Redux with AWS experience.
        </p>
        <p>
          Below you will find my proficient technical skills, highlighted full
          stack projects and contact information. The demos page showcases
          smaller project(s), although some can only be viewed on a desktop.
          Feel free to visit my linkedin and github for further details!
        </p>
      </div>
    </>
  );
}
