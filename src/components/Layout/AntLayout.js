import React, { useState } from 'react';
import { Layout, Collapse } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const { Panel } = Collapse;
const AntLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div>
            <Collapse onChange={() => { }}>
                <Panel header="Ant Layout" key="1">
                    <h3>Type 1</h3>
                    <Layout>
                        <Header>Header</Header>
                        <Content>Content</Content>
                        <Footer>Footer</Footer>
                    </Layout>

                    <h3>Type 2</h3>
                    <Layout>
                        <Header>Header</Header>
                        <Layout>
                            <Sider>
                                Sider
                                <div>
                                    sidebar content
                                </div>
                            </Sider>
                            <Content>Content</Content>
                        </Layout>
                        <Footer>Footer</Footer>
                    </Layout>

                    <h3>Type 3</h3>
                    <Layout>
                        <Header>Header</Header>
                        <Layout>
                            <Content>Content</Content>
                            <Sider>Sider</Sider>
                        </Layout>
                        <Footer>Footer</Footer>
                    </Layout>

                    <h3>Type 4</h3>
                    <Layout>
                        <Sider>Sider</Sider>
                        <Layout>
                            <Header>Header</Header>
                            <Content>Content</Content>
                            <Footer>Footer</Footer>
                        </Layout>
                    </Layout>
                </Panel>
                <Panel header="Sidebar" key="2">
                    <h3>Ant Layout</h3>
                    <div>
                        <h3>Sidebar</h3>
                        <Layout style={{ minHeight: '100vh' }}>
                            <Sider
                                collapsible
                                collapsed={collapsed}
                                onCollapse={value => setCollapsed(value)}
                                collapsedWidth={0}
                                // trigger={null}
                            >
                              lorem12lorem12lorem12lorem12lorem12lorem12lorem12

                            </Sider>
                            <Layout className="site-layout">
                                <Header className="site-layout-background" style={{ padding: 0 }} />
                                <Content style={{ margin: '0 16px' }}>
                                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                                        Bill is a cat.
                                    </div>
                                </Content>
                                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                            </Layout>
                        </Layout>
                    </div>
                </Panel>
            </Collapse>

        </div>
    );
};

export default AntLayout;