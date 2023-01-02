import React, {useState} from 'react';

import Layout, { Header, Footer, Sider, Content, Sidebar } from '../components/Layout';
import AntLayout from '../components/Layout/AntLayout';
const LayoutExample = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div>
            <AntLayout />
            <div>
                <h3>My Example</h3>
                <h4>Type 1</h4>
                <Layout>
                    <Header>
                        i'm the header
                    </Header>
                    <Content>
                        Hello i'm the content
                    </Content>
                    <Footer>
                        i'm the footer
                    </Footer>
                </Layout>

                <h4>Type 2</h4>
                <Layout>
                    <Sidebar width='100px'>side</Sidebar>
                    <Content>i'm content</Content>
                    <Sidebar width={400}>side</Sidebar>
                </Layout>

                <h3>Type 3</h3>
            <Layout>
                <Header>Header</Header>
                <Layout>
                    <Content>Content</Content>
                    <Sidebar>Sidebar</Sidebar>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>

                <h4>Type 4</h4>
                <Layout>
                    <Sidebar>Sidebar</Sidebar>
                    <Layout>
                        <Header>Header</Header>
                        <Content>Content</Content>
                        <Footer>Footer</Footer>
                    </Layout>
                </Layout>
                <h4>Sidebar with collapse</h4>
                <Layout>
                    <Sidebar
                    collapsible
                    >
                        Menu Items Menu Items 
                    </Sidebar>
                    <Content>
                        Content area
                    </Content>
                </Layout>
                <h4>Sidebar with custom trigger</h4>
                <Layout>
                    <Sidebar
                    collapsible
                    collapsed={collapsed}
                    trigger={null}
                    >
                        Menu Items  Menu Items 
                    </Sidebar>
                    <Content>
                        <button onClick={()=>setCollapsed(!collapsed)}>trigger</button>
                        Content area
                    </Content>
                </Layout>
            </div>
        </div>
    );
};

export default LayoutExample;