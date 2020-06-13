import 'package:flutter/material.dart';
import 'padKey.dart';

class Pad extends StatelessWidget {
  const Pad({ 
    Key key, 
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: Colors.grey[300],
      ),
      child: Padding(
        padding: EdgeInsets.all(0),
        child: Column(
          children: <Widget>[
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,          
              children: <Widget>[
                PadKey(text: 'Back'),
                PadKey(text: '0'),
                PadKey(text: 'Return'),
              ]
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,          
              children: <Widget>[
                PadKey(text: '1'),
                PadKey(text: '2'),
                PadKey(text: '3'),
              ]
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,          
              children: <Widget>[
                PadKey(text: '4'),
                PadKey(text: '5'),
                PadKey(text: '6'),
              ]
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,          
              children: <Widget>[
                PadKey(text: '7'),
                PadKey(text: '8'),
                PadKey(text: '9'),
              ]
            ),
          ]
        )
      )
    );
  }
}