const LoadingSkeleton = () => {
  return <CategorySkeleton />;
};

const CategorySkeleton = () => {
  return (
    <div className='shop'>
      <div className='category'>
        <h2>Category</h2>
        <div className='products'>
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
        <h2>Category</h2>
        <div className='products'>
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      </div>
    </div>
  );
};

const CardSkeleton = () => {
  return (
    <div className='card loading'>
      <div className='card-img loading' style={{ height: "150px" }}></div>
      <div className='details loading'>
        <p></p>
        <p></p>
        <div className='btnWrapper loading'></div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
