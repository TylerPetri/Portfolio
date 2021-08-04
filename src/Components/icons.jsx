import { FaGithub, FaReact } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import {
  SiAmazonaws,
  SiMaterialUi,
  SiBootstrap,
  SiMongodb,
  SiMysql,
  SiNodeDotJs,
  SiJquery,
} from 'react-icons/si';
import { GiMustache } from 'react-icons/gi';

export default function Icons() {
  return (
    <>
      <FaGithub className='icons' />
      <DiJavascript1 className='icons' />
      <SiNodeDotJs className='icons' />
      <FaReact className='icons' />
      <SiAmazonaws className='icons' />
      <SiMongodb className='icons' />
      <SiMysql className='icons' />
      <SiMaterialUi className='icons' />
      <SiBootstrap className='icons' />
      <SiJquery className='icons' />
      <GiMustache className='icons' />
    </>
  );
}
