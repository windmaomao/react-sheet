import 'package:flutter/material.dart';

class Stat extends StatelessWidget {
  const Stat({ 
    Key key, 
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: Colors.blueGrey,
      ),
      child: Padding(
        padding: EdgeInsets.all(16.0),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,          
          children: <Widget>[
            Text('123'),
            Text('Total '),
          ]
        ),
      )
    );
  }
}