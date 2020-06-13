import 'package:flutter/material.dart';

class Setting extends StatefulWidget {
  final int operationType;

  Setting({Key key, @required this.operationType}) : super(key: key);

  @override
  _SettingState createState() => _SettingState();

  @override
  Widget build(BuildContext context) {
    return Row();
  }
}

class _SettingState extends State<Setting> {
  int _operationType;

  void _operationTypeChanged(int index) {
    setState(() {
      _operationType = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Setting'),
        actions: <Widget>[
          IconButton(
            icon: Icon(Icons.check),
            onPressed: () => Navigator.pop(context)
          )
        ]
      ),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Row(
            children: <Widget>[
              Radio(
                value: 0,
                groupValue: _operationType,
                onChanged: _operationTypeChanged,
              ),
              Text('+'),
              Radio(
                value: 1,
                groupValue: _operationType,
                onChanged: _operationTypeChanged,
              ),
              Text('-'),
            ],
          ),
        )
      )
    );
  }
}