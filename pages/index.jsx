import Header from '../components/Header'
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
  () => import('../components/TIL'),
  { ssr: false }
)


export default function Home() {
  return (
    <>
      <Header />
      <DynamicComponentWithNoSSR />
    </>
  )
}