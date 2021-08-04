export default function Short(props) {
  return (
    <>
      <div className='work'>
        <div className='picCont'>
          <a
            href='https://library-of-stories.herokuapp.com/'
            target='_blank'
            rel='noreferrer'
          >
            <img
              src={props.LibraryOfStoriesGIF}
              alt='library of stories'
              className='pic'
            />
          </a>
        </div>
        <h4>MERN, API, Bcrypt, JWT, Google Books search app</h4>
        <p>
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
              {' '}
              Manually debugged through problem solving, adaptation and
              organization.
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
      <div className='work'>
        <div className='picCont'>
          <a
            href='http://alf-bp53.s3-website.us-east-2.amazonaws.com/'
            target='_blank'
            rel='noreferrer'
          >
            <img src={props.AWSform} alt='awsform-app' className='pic' />
          </a>
        </div>
        <h4>AWS form application</h4>
        <p>
          <ul>
            <li>A serverless AWS form built in Reactjs using Material-ui.</li>
            <li>
              Hosted on S3 static website, utilizing API-Gateway/Lambda
              functions for API calls connecting front-end and DynamoDB.
            </li>
            <li>
              Using an IAM user, assigning permissions for CORS, S3 and DynamoDB
              calls.
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
      <div className='work'>
        <div className='picCont'>
          <a
            href='http://18.117.245.156/'
            target='_blank'
            rel='noreferrer'
            className='imgLink'
          >
            <img src={props.awsthoughts} alt='aws-thoughts' className='pic' />
          </a>
        </div>
        <h4>AWS thoughts</h4>
        <p>
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
      <div className='work'>
        <div className='picCont'>
          <a
            href='https://googlebooksapi9000.herokuapp.com/'
            target='_blank'
            rel='noreferrer'
          >
            <img
              src={props.googlebooksgif}
              alt='google-books-search'
              className='pic'
            />
          </a>
        </div>
        <h4>MERN, API, Bcrypt, JWT, Google Books search app</h4>
        <p>
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
    </>
  );
}
