
# HashMe🔒💻

**Description** : “HashMe” is a command-line software that takes a .txt file as input and outputs a new hashed text file. The application also provides various algorithms from which you can select your preferred hash algorithm. The application reads every lines of the original file, with every input line applying the cryptographic operation to generate individual hashes.

**Two versions of the program ( Serial Processing & Parallel Processing )**

This application offers two modes of operation: serial and parallel processing. Node.js typically runs in a single thread, which can result in slow performance when processing large text files. To address this, I implemented the serial processing approach with the help of NodeJS's built-in Cluster module. The module creates child processes that each run on their own thread, based on the number of cores available in the system. The workload is then distributed among these threads by the main thread. This approach optimizes execution time by processing jobs in parallel, making it an efficient tool for handling large amounts of data using multi-core parallel processing.


URL - https://codesandbox.io/p/github/phyohan18/HashMe-NodeJS-CLI-Tool/main?workspaceId=f713ab8b-1a2f-4269-b00f-2f063a82033a&file=%2FREADME.md
## Tech Stack

Node.js, npm 

## Demo

![App Screenshot](https://i.ibb.co/1X30XQj/Recording-2.gif)

## Run Locally

Clone the project

```bash
  git clone https://github.com/phyohan18/HashMe-NodeJS-CLI-Tool.git
```

Run npm install to install everything from package.json

```bash
 npm install
```

Then to run the parallel processing version:

```bash
 npm run parallelHash
```
For the serial version:

```bash
 npm run serialHash
```

You can use the sample data (.txt) file inside sample_data folder.

## Discussion

The chart below gives a clear picture of the execution time gap between processing and parallel processing on various sizes of dummy data.


**Performance Comparison using SHA-2 Hash Algorithm**

![App Screenshot](https://i.ibb.co/tCdq3Bw/Picture1.png)

As the size of the data input size is higher, the effectiveness of parallel execution brought by utilizing the Cluster module gains. However, bear in mind that when we apply parallel processing, the CPU utilization may reach 100%, resulting in increased CPU heat. Furthermore, when it comes to parallel processing, workload balancing is critical since it can finish all jobs in parallel in an optimal manner, saving time and speeding up the execution. 

**Performance Comparison using SHA-2 Hash Algorithm**

The figure below compares the program's execution times of hashing 100,000 lines of plain text using SHA-2 hash algorithm for serial and parallel versions on two different hardware configurations.

![App Screenshot](https://i.ibb.co/YbqYGdd/Picture2.png)

The chart shows that hashing a text file with 100,000 lines in System 1 takes over 5 seconds in serial processing, but only 2.4 seconds in parallel processing, which is more than twice as fast. In contrast, serial processing in System 2 took 8.8 seconds while parallel processing took nearly 5 seconds. This difference is due to System 1's clock speed of 3.20 GHz, which is faster than System 2's 2.70 GHz. Additionally, System 1 has four cores, two more than System 2. However, if System 2 had more cores than System 1, its performance might be better.

## Recommendation
It is important to weigh the pros and cons before choosing between parallel and serial processing. Although parallel processing is faster than serial processing, it requires specialized hardware setup that can be more expensive and challenging to deploy. Moreover, activating multi-core power may increase CPU consumption and generate more heat, potentially leading to system failures if the processor cannot keep up with the workload.

## Closing thoughts

This mini-project has helped me comprehend the characteristics and distinctions between serial and parallel processing, as well as their advantages and disadvantages. I have also learned how large-scale applications can enhance their performance in real-world scenarios by utilizing parallel architecture. As a result, I now understand how to distribute the workload across available cores and recognize that a system with superior hardware configuration can complete tasks more quickly if we leverage its multi-core capabilities.

## Feedback

If you have any feedback, please reach out to me at phyohan1234@gmail.com


## Authors

- [@phyohan18](https://www.github.com/phyohan18)
