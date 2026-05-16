import worldMapSvg from '../../assets/map_with_pins_9e361db506.svg';

export default function WorldMap() {
  return (
    <img
      src={worldMapSvg}
      alt="World map with project locations"
      className="w-full h-full object-contain object-center"
      style={{ display: 'block' }}
    />
  );
}
