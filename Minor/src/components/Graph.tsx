import React from "react"
// @ts-ignore
import DonutChart from 'react-donut-chart'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Group } from '@visx/group';
import "./Graph.css"
import {
  Glyph as CustomGlyph,
  GlyphCircle,
  GlyphCross,
  GlyphDiamond,
  GlyphSquare,
  GlyphStar,
  GlyphTriangle,
  GlyphWye,
} from '@visx/glyph';
import { LinePath } from '@visx/shape';
import genDateValue, { DateValue } from '@visx/mock-data/lib/generators/genDateValue';
import { scaleTime, scaleLinear } from '@visx/scale';
import { curveMonotoneX, curveBasis } from '@visx/curve';

const defaultMargin = { top: 10, right: 10, bottom: 10, left: 10 };

// colors
export const primaryColor = '#8921e0';
export const secondaryColor = '#00f2ff';
const contrastColor = '#ffffff';

// Glyphs to render
const Glyphs = [
  GlyphCircle,
  GlyphCross,
  GlyphDiamond,
  GlyphStar,
  GlyphTriangle,
  GlyphSquare,
  GlyphWye,
  ({ left, top }: { left: number; top: number }) => (
    <CustomGlyph left={left} top={top}>
      <circle r={12} fill={secondaryColor} />
      <text fontSize={16} textAnchor="middle" dy="0.5em">
        {'💜'}
      </text>
    </CustomGlyph>
  ),
];

const data: DateValue[] = genDateValue(Glyphs.length * 2, 0.91);

// accessors
const date = (d: DateValue) => d.date.valueOf();
const value = (d: DateValue) => d.value;

// scales
const xScale = scaleTime<number>({
  domain: [Math.min(...data.map(date)), Math.max(...data.map(date))],
});
const yScale = scaleLinear<number>({
  domain: [0, Math.max(...data.map(value))],
});

// positions
const getX = (d: DateValue) => xScale(date(d)) ?? 0;
const getY = (d: DateValue) => yScale(value(d)) ?? 0;

export type GlyphProps = {
  width: number;
  height: number;
  margin?: typeof defaultMargin;
};

const Graph: React.FC<GlyphProps> = ({ width=100, height=100, margin = defaultMargin}) => {
    if (width < 10) return null;

  // bounds
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // update scale range to match bounds
  xScale.range([0, innerWidth]);
  yScale.range([innerHeight, 0]);
    return(
        <IonPage>
            <IonContent>
           <IonTitle>Dashboard</IonTitle>
    <DonutChart width="400" height="300" className="donutchart"
    colors={['#C9CC3F','#D2042D', '#0398DB','#FFBF00','#C41E3A','#3949A3' ]}
    data={[{
        label: 'Joy',
        value: 35
    },
    {
        label: 'Anger',
        value: 1,
    },
    {
      label: 'Fear',
      value: 8,
  },
  {
        label: 'Suprise',
        value: 2,
  },
  {
    label: 'Love',
    value: 45,
},
{
  label: 'Sadness',
  value: 9,
}

    ]} />
            </IonContent>
        </IonPage>
    );
}

export default Graph;