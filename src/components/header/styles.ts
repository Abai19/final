import { Layout, Typography } from "antd";
import styled from "styled-components";
const {Header} = Layout
export const Logo = styled(Typography)`
    text-transform: uppercase;
    color: white;
    font-size: 22px;
`
export const HeaderWrapper = styled(Header)`
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between
`