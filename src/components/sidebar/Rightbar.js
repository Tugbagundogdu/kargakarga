import IndexPage from "./IndexPage";

const Rightbar = () => {
  const accordionItems = [
    {
      title: 'Proje isim 1',
      options: ['Overview', 'Notifications', 'Analytics', 'Reports'],
    },
    {
      title: 'Proje isim 2',
      options: ['Overview', 'Notifications', 'Analytics', 'Reports'],
    },
    {
      title: 'Proje isim 3',
      options: ['Overview', 'Notifications', 'Analytics', 'Reports'],
    },
    {
      title: 'Proje isim 4',
      options: ['Overview', 'Notifications', 'Analytics', 'Reports'],
    },
  ];

  return (
    <div className="w-full">
      <IndexPage items={accordionItems} />
    </div>
  );
};

export default Rightbar;