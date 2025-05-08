import { Fragment } from 'react';
import HeroSection from '@/components/layout/HeroSection';
import Head from 'next/head';

function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>CodeFeed | Home</title>
        <meta 
          name="description"
          description ="Browse all code and coding news of today"
        />

      </Head>
      <HeroSection 
        title="Code"
        description="Catch up all the coding news from around...."
        bgImage="/backgrounds/hero-code.webp"
      />

      <h2>Code Feed</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi illo, atque deserunt officia minus veritatis ea repudiandae quas animi eius?</p>
    </Fragment>
  )
}

export default HomePage;