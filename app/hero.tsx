import Link from 'next/link';
import Animation from './animation';

export default function Hero() {
  return (
    <>
      <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
        <h1 className=" mb-4 text-3xl font-medium text-gray-900 sm:text-4xl">
          안녕하세요.
          <br className="hidden lg:inline-block" />
          여기는 레도 월드입니다!
        </h1>
        <p className="mb-8 leading-relaxed">
          Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
          plant cold-pressed tacos poke beard tote bag. Heirloom echo park
          mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon
          try-hard chambray.
        </p>
        <div className="flex justify-center">
          <Link href="/projects" className="go-project-btn">
            프로젝트 보러 가기
          </Link>
        </div>
      </div>
      <div className="w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
        <Animation />
      </div>
    </>
  );
}
