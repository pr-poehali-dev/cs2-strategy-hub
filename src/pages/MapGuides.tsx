
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const maps = [
  {
    id: "dust2",
    name: "Dust 2",
    image: "https://images.unsplash.com/photo-1627853257933-9706a2220137?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Классическая карта с двумя бомбсайтами и средней линией"
  },
  {
    id: "mirage",
    name: "Mirage",
    image: "https://images.unsplash.com/photo-1580477667995-2b94f01c9516?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Карта с тремя основными проходами и большим количеством тактических возможностей"
  },
  {
    id: "inferno",
    name: "Inferno",
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Узкие коридоры и множество укрытий, требующие слаженной командной игры"
  },
  {
    id: "nuke",
    name: "Nuke",
    image: "https://images.unsplash.com/photo-1603481546579-65d935ba9cdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Вертикальная карта с двумя бомбсайтами, расположенными друг над другом"
  },
  {
    id: "ancient",
    name: "Ancient",
    image: "https://images.unsplash.com/photo-1501769752-a59efa2298ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Новая карта с узкими проходами и множеством вертикальных точек"
  },
  {
    id: "anubis",
    name: "Anubis",
    image: "https://images.unsplash.com/photo-1604537466158-719b1972feb8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Относительно новая карта с множеством проходов и возможностей для фланговых атак"
  }
];

const MapGuides = () => {
  const [selectedMap, setSelectedMap] = useState(maps[0]);

  return (
    <div className="container py-12 px-4 mx-auto">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Гайды по картам CS2</h1>
        <p className="text-muted-foreground mb-8">
          Выберите карту для изучения тактик, позиций и полезных фишек
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {maps.map((map) => (
            <Card 
              key={map.id}
              className={`cursor-pointer hover:shadow-md transition-all ${selectedMap.id === map.id ? 'ring-2 ring-primary' : ''}`}
              onClick={() => setSelectedMap(map)}
            >
              <div className="h-32 overflow-hidden">
                <img 
                  src={map.image} 
                  alt={map.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-lg">{map.name}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-lg border shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold">{selectedMap.name}</h2>
              <p className="text-muted-foreground">{selectedMap.description}</p>
            </div>
            <img 
              src={selectedMap.image} 
              alt={selectedMap.name} 
              className="w-20 h-20 object-cover rounded-md hidden md:block"
            />
          </div>

          <Tabs defaultValue="overview">
            <TabsList className="mb-6">
              <TabsTrigger value="overview">Обзор</TabsTrigger>
              <TabsTrigger value="t-side">За T</TabsTrigger>
              <TabsTrigger value="ct-side">За CT</TabsTrigger>
              <TabsTrigger value="utility">Гранаты</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-4">
              <h3 className="text-xl font-semibold">Общий обзор карты {selectedMap.name}</h3>
              <p>
                Детальное описание особенностей карты, основных зон и ключевых точек.
                Здесь представлена информация о том, как устроена карта и какие основные
                стратегии на ней работают.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Особенности карты</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-4 space-y-2">
                      <li>Уникальная особенность 1</li>
                      <li>Уникальная особенность 2</li>
                      <li>Уникальная особенность 3</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Ключевые зоны</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-4 space-y-2">
                      <li>Важная зона 1 - описание</li>
                      <li>Важная зона 2 - описание</li>
                      <li>Важная зона 3 - описание</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="t-side">
              <h3 className="text-xl font-semibold mb-4">Тактики за террористов</h3>
              <p className="mb-6">
                Основные стратегии и тактики игры за сторону террористов на карте {selectedMap.name}.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium mb-2">Быстрый захват A</h4>
                  <p className="text-muted-foreground mb-2">
                    Тактика для быстрого захвата бомбсайта A с использованием дымовых гранат.
                  </p>
                  <div className="bg-muted/30 p-4 rounded-md">
                    <p>Детальное описание тактики с указанием позиций и действий каждого игрока...</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2">Сплит B через мид</h4>
                  <p className="text-muted-foreground mb-2">
                    Разделение команды для захода на B через центральную часть карты.
                  </p>
                  <div className="bg-muted/30 p-4 rounded-md">
                    <p>Детальное описание тактики с указанием позиций и действий каждого игрока...</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="ct-side">
              <h3 className="text-xl font-semibold mb-4">Тактики за контр-террористов</h3>
              <p className="mb-6">
                Лучшие защитные стратегии и тактики игры за CT на карте {selectedMap.name}.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium mb-2">Классическая защита A</h4>
                  <p className="text-muted-foreground mb-2">
                    Стандартная расстановка для защиты бомбсайта А с возможностью быстрой ротации.
                  </p>
                  <div className="bg-muted/30 p-4 rounded-md">
                    <p>Детальное описание тактики с указанием позиций и действий каждого игрока...</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2">Агрессивный контроль мида</h4>
                  <p className="text-muted-foreground mb-2">
                    Агрессивная тактика для раннего захвата контроля над центральной частью карты.
                  </p>
                  <div className="bg-muted/30 p-4 rounded-md">
                    <p>Детальное описание тактики с указанием позиций и действий каждого игрока...</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="utility">
              <h3 className="text-xl font-semibold mb-4">Полезные гранаты</h3>
              <p className="mb-6">
                Лайнапы дымовых гранат, молотовов и флешек для карты {selectedMap.name}.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Дымовые гранаты</CardTitle>
                    <CardDescription>Ключевые дымы для T и CT сторон</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span>Дым для блокировки AWP на длинной</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span>Дым для захода на A через коннектор</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span>Дым CT для B сайта</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Флеш-гранаты</CardTitle>
                    <CardDescription>Эффективные флешки для обоих сторон</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                        <span>Поп-флеш для захода на A</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                        <span>Флеш через CT на B</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                        <span>Флеш для ретейка A сайта</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default MapGuides;
