import Cards from '~/components/cards'

export default function () {
  return (
    <div className='flex grid-rows-3 gap-4 m-5'>
      <Cards/>
      <Cards/>
      <Cards/>
    </div>
  );
}