import React, { Component } from 'react';
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
} from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover',
              }}
            >
              React Project #1
            </CardTitle>
            <CardText>This is the Readmd of React Project 1</CardText>
            <CardActions border>
              <Button colored>
                <a href="https://github.com/ajayns/react-projects/tree/master/tictactoe">
                  Go To Code
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}></CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover',
              }}
            >
              React Project #2
            </CardTitle>
            <CardText>This is the Readmd of React Project 2</CardText>
            <CardActions border>
              <Button colored>
                <a href="https://github.com/ajayns/react-projects/tree/master/reddit-clone">
                  Go To Code
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}></CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover',
              }}
            >
              React Project #3
            </CardTitle>
            <CardText>This is the Readmd of React Project 3</CardText>
            <CardActions border>
              <Button colored>
                <a href="https://github.com/ajayns/react-projects/tree/master/property-finder">
                  Go To Code
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}></CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(https://cdn.clipart.email/ee0b63868b16a8a6fc3175ea9c754fdc_angular-6-article-series-ahmed-abdelsalam-medium_1280-720.png) center / cover',
              }}
            >
              Angular Project #1
            </CardTitle>
            <CardText>This is the Readmd of Angular Project 1</CardText>
            <CardActions border>
              <Button colored>
                <a href="https://github.com/aviabird/angularspree">
                  Go To Code
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}></CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(https://cdn.clipart.email/ee0b63868b16a8a6fc3175ea9c754fdc_angular-6-article-series-ahmed-abdelsalam-medium_1280-720.png) center / cover',
              }}
            >
              Angular Project #2
            </CardTitle>
            <CardText>This is the Readmd of Angular Project 2</CardText>
            <CardActions border>
              <Button colored>
                <a href="https://github.com/aviabird/pinterest">Go To Code</a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}></CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(https://cdn.clipart.email/ee0b63868b16a8a6fc3175ea9c754fdc_angular-6-article-series-ahmed-abdelsalam-medium_1280-720.png) center / cover',
              }}
            >
              Angular Project #3
            </CardTitle>
            <CardText>This is the Readmd of Angular Project 3</CardText>
            <CardActions border>
              <Button colored>
                <a href="https://github.com/coryrylan/ng-math">Go To Code</a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}></CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: 'black',
                height: '176px',
                background:
                  'url(https://i1.wp.com/blog.logrocket.com/wp-content/uploads/2020/02/Vue-kinesis.png?fit=730%2C412&ssl=1) center / cover',
              }}
            >
              VueJS Project #1
            </CardTitle>
            <CardText>This is the Readmd of VueJS Project 1</CardText>
            <CardActions border>
              <Button colored>
                <a href="https://github.com/salomonelli/best-resume-ever?utm_source=mybridge&utm_medium=blog&utm_campaign=read_more">
                  Go To Code
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: 'black' }}></CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: 'black',
                height: '176px',
                background:
                  'url(https://i1.wp.com/blog.logrocket.com/wp-content/uploads/2020/02/Vue-kinesis.png?fit=730%2C412&ssl=1) center / cover',
              }}
            >
              VueJS Project #2
            </CardTitle>
            <CardText>This is the Readmd of VueJS Project 2</CardText>
            <CardActions border>
              <Button colored>
                <a href="https://github.com/PanJiaChen/vue-element-admin?utm_source=mybridge&utm_medium=blog&utm_campaign=read_more">
                  Go To Code
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}></CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: 'black',
                height: '176px',
                background:
                  'url(https://i1.wp.com/blog.logrocket.com/wp-content/uploads/2020/02/Vue-kinesis.png?fit=730%2C412&ssl=1) center / cover',
              }}
            >
              VueJS Project #3
            </CardTitle>
            <CardText>This is the Readmd of VueJS Project 3</CardText>
            <CardActions border>
              <Button colored>
                <a href="https://github.com/vuejs/vue-hackernews-2.0?utm_source=mybridge&utm_medium=blog&utm_campaign=read_more">
                  Go To Code
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}></CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: 'black',
                height: '176px',
                background:
                  'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmt9Qw-1jNGV4IXg7gCev5Cf7Zxx56r0FybqxUWK2Ui8Z70M7k&usqp=CAU) center / cover',
              }}
            >
              MongoDB Project #1
            </CardTitle>
            <CardText>This is the Readmd of MongoDB Project 1</CardText>
            <CardActions border>
              <Button colored>
                <a href="https://github.com/mongodb/docs">Go To Code</a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: 'black' }}></CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: 'black',
                height: '176px',
                background:
                  'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmt9Qw-1jNGV4IXg7gCev5Cf7Zxx56r0FybqxUWK2Ui8Z70M7k&usqp=CAU) center / cover',
              }}
            >
              MongoDB Project #2
            </CardTitle>
            <CardText>This is the Readmd of MongoDB Project 2</CardText>
            <CardActions border>
              <Button colored>
                G
                <a href="https://github.com/mongodb/go-client-mongodb-atlas">
                  Go To Code
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: 'black' }}></CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: 'black',
                height: '176px',
                background:
                  'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmt9Qw-1jNGV4IXg7gCev5Cf7Zxx56r0FybqxUWK2Ui8Z70M7k&usqp=CAU) center / cover',
              }}
            >
              MongoDB Project #3
            </CardTitle>
            <CardText>This is the Readmd of MongoDB Project 3</CardText>
            <CardActions border>
              <Button colored>
                <a href="https://github.com/mongodb/go-client-mongodb-ops-manager">
                  Go To Code
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: 'black' }}></CardMenu>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>VueJS</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
