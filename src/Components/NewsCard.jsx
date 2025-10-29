import { FaEye, FaStar } from "react-icons/fa";

const NewsCard = ( props = {}) => {

    const {singleNews} = props || {};
  const {
    title,
    author,
    published_date,
    thumbnail_url,
    rating,
    total_view,
    details,
  } = singleNews;

  return (
    <div className="card bg-base-100 shadow-xl border border-gray-200 hover:shadow-2xl transition duration-300">
      {/* Author Info */}
      <div className="flex items-center gap-3 px-5 pt-5">
        <img
          src={author.img}
          alt={author.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-sm">{author.name}</h3>
          <p className="text-xs text-gray-500">{author.published_date}</p>
        </div>
      </div>

      {/* Title */}
      <div className="px-5 mt-3">
        <h2 className="text-lg font-bold leading-snug hover:text-primary cursor-pointer">
          {title}
        </h2>
      </div>

      {/* Image */}
      <figure className="px-5 pt-3">
        <img
          src={thumbnail_url}
          alt="singleNews"
          className="rounded-xl w-full h-52 object-cover"
        />
      </figure>

      {/* Details */}
      <div className="card-body px-5 pt-3 pb-4">
        <p className="text-sm text-gray-600">
          {details.slice(0, 150)}...
          <span className="text-primary cursor-pointer font-semibold">
            Read More
          </span>
        </p>

        {/* Rating and Views */}
        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center gap-1 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={i < Math.round(rating.number) ? "text-yellow-500" : "text-gray-300"}
              />
            ))}
            <span className="text-gray-700 font-medium ml-1">{rating.number}</span>
          </div>

          <div className="flex items-center gap-1 text-gray-600">
            <FaEye />
            <span className="text-sm">{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
