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
        <h4>Full Stack Short Story app</h4>
        <p>
          {' '}
          <ul>
            <li>
              Developed a full stack short story publishing/reading website,
              with search features, login authentication and error handling.
            </li>
            <li>
              MongoDB used as main database, utilizing DynamoDB for user info
              and session authentication.{' '}
            </li>
            <li>
              {' '}
              Utilized Mulder and S3 buckets, allowing image file upload which
              was tested with Insomnia.
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
            href='https://chatch4n.herokuapp.com/'
            target='_blank'
            rel='noreferrer'
          >
            <img src={props.chatPlatform} alt='chat-platform' className='pic' />
          </a>
        </div>
        <h4>SocketIO chatroom platform with MongoDB backend</h4>
        <p>
          {' '}
          <ul>
            <li>Implemented SocketIO under the react framework (amusingly).</li>
            <li>
              Utilizing MongoDB as the backend database to keep track of the
              rooms/count display on the homepage
            </li>
          </ul>
        </p>
        <div className='gitappLinks'>
          <a
            href='https://github.com/TylerPetri/chat-platform.git'
            target='_blank'
            rel='noreferrer'
            className='gitlink'
          >
            Github repo
          </a>
          <a
            href='https://chatch4n.herokuapp.com/'
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
            href='https://glacial-taiga-08008.herokuapp.com/'
            target='_blank'
            rel='noreferrer'
          >
            <img src={props.burgers} alt='burgers' className='pic' />
          </a>
        </div>
        <h4>Handlebars MySQL</h4>
        <p>
          {' '}
          <ul>
            <li>
              This project is meant to showcase my familiarity with vanilla
              HTML/JS.
            </li>
            <li>
              Utilizing Handlebars and a SQL database backend for tracking
              information.
            </li>
          </ul>
        </p>
        <div className='gitappLinks'>
          <a
            href='https://github.com/TylerPetri/burger.git'
            target='_blank'
            rel='noreferrer'
            className='gitlink'
          >
            Github repo
          </a>
          <a
            href='https://glacial-taiga-08008.herokuapp.com/'
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
