import ContentWrapper from 'components/ContentWrapper.react';
import {Link} from 'react-router';
import FontAwesome from 'react-fontawesome';

export default (props) => (
  <ContentWrapper header="" subHeader="">
    <div className="error-page">
      <h2 className="headline text-yellow" style={{marginTop: 0, lineHeight: '100px'}}> 404</h2>
      <div className="error-content">
        <h3><FontAwesome name="warning" className="text-yellow" /> Oops! Page not found.</h3>
        <p>
          We could not find the page you were looking for.
        </p>
        <p>
          Meanwhile, you may <Link to="/">return to dashboard</Link>.
        </p>
      </div>
    </div>
  </ContentWrapper>
)
