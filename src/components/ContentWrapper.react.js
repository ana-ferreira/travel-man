import Content from 'components/Content.react';
import Header from 'components/Header.react';



export default ({header, subHeader, children}) => (
  <div>
    <Header header={header} subHeader={subHeader} />
    <Content>
      {children}
    </Content>
  </div>
)
