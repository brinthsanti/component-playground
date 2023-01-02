import React from 'react';
import Button, { AntButton } from '../components/Button';
import { SearchOutlined } from '@ant-design/icons';

const ButtonExample = () => {
    return (
        <><section>
            <AntButton />
        </section><section>
                <h1>Type</h1>
                <Button type='primary'>Primary</Button>
                <Button type='text'>Text</Button>
                <Button type='link'>Link</Button>
            </section><section>
                <h1>Size</h1>
                <Button type='primary' size="small">Small</Button>
                <Button type='text' size="large">Large</Button>
                <Button type='link'>default</Button>
            </section><section>
                <h1>Icon</h1>
                <Button type='primary' icon={<SearchOutlined />}>Icon Button</Button>
                <h1>Icon With Loading</h1>
                <Button type='primary' icon={<SearchOutlined />} loading>Icon Button</Button>
                <br></br>
                <br></br>
                <Button type="primary" loading>
                    Loading
                </Button>
                <br></br>
                <br></br>
                <Button type='primary' icon={<SearchOutlined />}></Button>
            </section><section>
                Block
                <br></br>
                <br></br>
                <Button type='primary' block>Block</Button>
            </section><section>
                Disabled
                <br></br>
                <br></br>
                <Button type='primary' disabled>Disabled</Button>
            </section></>
    );
};

export default ButtonExample;