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
          A Web Developer enjoying the problem-solving and looking forward to
          fun big things in the near future. With experience in Mathematics and
          being around computers most of my days, I'm eager to contribute strong
          critical thinking and problem-solving to the team through fabulous
          communication skills! These days with the little free time I have from
          practicing code, I'll be wherever there's life to crack a joke and
          enjoy the times.
        </p>
      </div>
    </>
  );
}
