export default function Long(props) {
  return (
    <>
      <div className='worklong'>
        <div className='process'>
          <h4>Full Stack Short Story app</h4>
          <p style={{ height: '160px', paddingBottom: '0' }}>
            {' '}
            <ul>
              <li>
                Developed a full stack short story publishing/reading website,
                including GSAP/loading animation.{' '}
              </li>
              <li>
                DynamoDB used as main database and as session authentication.
                Considering Redis/Memcache.{' '}
              </li>

              <li>
                Looking into making MongoDB the main database. Adding features
                daily.
              </li>
            </ul>
          </p>

          <div className='gitappLinks'>
            <a
              href='https://github.com/TylerPetri/De-Fabulis.git'
              target='_blank'
              rel='noreferrer'
              className='gitlink'
            >
              Github repo
            </a>
            <a
              href='https://library-of-stories.herokuapp.com/'
              target='_blank'
              rel='noreferrer'
              className='gitlink'
            >
              App
            </a>
          </div>
        </div>
        <div className='picLongCont'>
          <a
            href='https://library-of-stories.herokuapp.com/'
            target='_blank'
            rel='noreferrer'
            className='imgLink'
          >
            <img
              src={props.LibraryOfStoriesGIF}
              alt='library of stories'
              className='piclong'
            ></img>
          </a>
        </div>
      </div>
      <div className='worklong'>
        <div className='process'>
          <h4>AWS form application</h4>
          <p id='AWSformP'>
            <ul>
              <li>A serverless AWS form built in Reactjs using Material-ui.</li>
              <li>
                Hosted on S3 static website, utilizing API-Gateway/Lambda
                functions for API calls connecting front-end and DynamoDB.
              </li>
              <li>
                Using an IAM user, assigning permissions for CORS, S3 and
                DynamoDB calls.
              </li>
            </ul>
          </p>
          <div className='gitappLinks'>
            <a
              href='https://github.com/TylerPetri/aws-lambda-form.git'
              target='_blank'
              rel='noreferrer'
              className='gitlink'
            >
              Github repo
            </a>
            <a
              href='http://alf-bp53.s3-website.us-east-2.amazonaws.com/'
              target='_blank'
              rel='noreferrer'
              className='gitlink'
            >
              App
            </a>
          </div>
        </div>
        <div className='picLongCont'>
          <a
            href='http://alf-bp53.s3-website.us-east-2.amazonaws.com/'
            target='_blank'
            rel='noreferrer'
          >
            <img
              src={props.AWSform}
              alt='awsform-app'
              className='piclong'
              id='formGif'
            />
          </a>
        </div>
      </div>
      <div className='worklong'>
        <div className='process'>
          <h4>AWS thoughts</h4>
          <p style={{ height: '200px' }}>
            <ul>
              <li>
                Developed a full stack message board in Reactjs, allowing image
                and text upload capabilities.
              </li>
              <li>
                Utilizing AWS, S3 for image bucket, DynamoDB for text and EC2
                Ubuntu Nginx pm2 for hosting.
              </li>
              <li>Tested with Insomnia.</li>
            </ul>
          </p>
          <div className='gitappLinks'>
            <a
              href='https://github.com/TylerPetri/aws-thought.git'
              target='_blank'
              rel='noreferrer'
              className='gitlink'
            >
              Github repo
            </a>
            <a
              href='http://18.117.245.156/'
              target='_blank'
              rel='noreferrer'
              className='gitlink'
            >
              App
            </a>
          </div>
        </div>
        <div className='picLongCont'>
          <a
            href='http://18.117.245.156/'
            target='_blank'
            rel='noreferrer'
            className='imgLink'
          >
            <img
              src={props.awsthoughts}
              alt='aws-thoughts'
              className='piclong'
            />
          </a>
        </div>
      </div>

      <div className='worklong'>
        <div className='process'>
          <h4>MERN, API, Bcrypt, JWT, Google Books search app</h4>
          <p style={{ height: '88px' }}>
            {' '}
            <ul>
              <li>
                Developed a UI for the google books search API with
                user-authentication by incorporating MongoDB & animation with
                vantajs. A Reactjs app.
              </li>
            </ul>
          </p>

          <div className='gitappLinks'>
            <a
              href='https://github.com/TylerPetri/Google-books-search.git'
              target='_blank'
              rel='noreferrer'
              className='gitlink'
            >
              Github repo
            </a>
            <a
              href='https://googlebooksapi9000.herokuapp.com/'
              target='_blank'
              rel='noreferrer'
              className='gitlink'
            >
              App
            </a>
          </div>
        </div>
        <div className='picLongCont'>
          <a
            href='https://googlebooksapi9000.herokuapp.com/'
            target='_blank'
            rel='noreferrer'
            className='imgLink'
          >
            <img
              src={props.googlebooksgif}
              alt='google-books-search'
              className='piclong'
            ></img>
          </a>
        </div>
      </div>
    </>
  );
}
